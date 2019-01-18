class PagesController < ApplicationController

  def home
    @message = Message.new
    # if @message.valid?
    #   MessageMailer.contact_me(@message).deliver_now
    #   redirect_to new_message_url
    #   flash[:notice] = "Message received, thanks!"
    # else
    #   flash[:notice] = "There was an error sending your message. Please try again."
    #   render :new
    # end
  end

  def page
  end

  private

  # def message_params
  #   params.require(:message).permit(:name, :email, :body)
  # end
end
